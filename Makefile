API_VERSION=$(shell cat api_version)
SDK_VERSION=$(shell cat sdk_version)
USER_ID=$(shell id -u)
GROUP_ID=$(shell id -g)
OPENAPI_IMG=openapitools/openapi-generator-cli:v5.4.0

all: help

.PHONY: help
help:
	@echo "help:"
	@echo "- make gen  : regenerate SDK"
	@echo "- make test : run all tests"

.PHONY: gen
gen: clean osc-generate

.PNONY: openapi-generator-help
openapi-generator-help:
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) config-help -g typescript-fetch

.PHONY: osc-generate
osc-generate: osc-api/outscale.yaml
	rm -rf .sdk || true
	mkdir .sdk
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) generate -i /sdk/osc-api/outscale.yaml -g typescript-fetch -c /sdk/gen.yml -o /sdk/.sdk --additional-properties=npmVersion=$(SDK_VERSION)
	# Set default user agent including sdk version using reproductible sed.
	#docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) sed -i "s/ *UserAgent:.*/                UserAgent:     \"osc-sdk-go\/$(SDK_VERSION)\",/" /sdk/.sdk/configuration.go
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) chown -R $(USER_ID).$(GROUP_ID) /sdk/.sdk
	mv .sdk/src ./
	mv .sdk/package.json ./
	mv .sdk/tsconfig.json ./
	rm -rf .sdk

osc-api/outscale.yaml:
	git clone https://github.com/outscale/osc-api.git && cd osc-api && git checkout -b $(API_VERSION) $(API_VERSION)

.PHONY: clean
clean:
	rm -rf .sdk osc-api src package.json tsconfig.json || true

.PHONY: test
test: reuse-test examples-test
	@echo all tests OK

.PHONY: reuse-test
reuse-test:
	docker run --rm --volume $(PWD):/data fsfe/reuse:0.11.1 lint

.PHONY: examples-test
	echo TODO && false

# try to regen, should not have any difference
.PHONY: regen-test
regen-test: gen
	git add src package.json tsconfig.json
	git diff --cached -s --exit-code
	git diff -s --exit-code

# Used by bot to auto-release
# GH_TOKEN and SSH_PRIVATE_KEY are needed
.PHONY: auto-release
auto-release: auto-release-cleanup osc-api-check release-check-duplicate release-build release-push release-pr
	@echo OK

.PHONY: auto-release-cleanup
auto-release-cleanup:
	rm -rf .auto-release-abort || true

.PHONY: osc-api-check
osc-api-check:
	bash .github/scripts/osc-api-check.sh

.PHONY: release-check-duplicate
release-check-duplicate:
	bash .github/scripts/release-check-duplicate.sh

.PHONY: release-build
release-build:
	bash .github/scripts/release-build.sh

.PHONY: release-push
release-push:
	bash .github/scripts/release-push.sh

.PHONY: release-pr
release-pr:
	bash .github/scripts/release-pr.sh
