.PHONY: help up down test test-watch lint lint-fix
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

up: ## Starts the devlopment environment
	@docker-compose build dev
	@docker-compose up dev

upd: ## Starts the dev environment in detach mode
	@docker-compose build dev
	@docker-compose up -d dev

down: ## Bring down the devlopment environment
	@docker-compose down

cleanup: ## Starts the devlopment environment witha clean build
	@rm -rf node_modules/
	@docker-compose build --no-cache dev
	@docker-compose up dev

test: ## Run all tests
	@docker-compose run --rm -e CI=true dev yarn test

test-watch: ## Run all tests in watch mode
	@docker-compose run --rm -e CI=true dev yarn test --watchAll

lint: ## Run eslint on all files
	@docker-compose run dev yarn run eslint .

lint-fix: ## Attempt to automatically fix eslint issues on a specific file 
ifdef path
	@docker-compose run dev yarn run eslint --fix $$path
else
	@echo "Usage: make lint-fix path=path/to/file.js" && exit 64
endif
