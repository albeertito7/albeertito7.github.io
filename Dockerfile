FROM ruby:2.7.4-alpine3.14
RUN apk update && apk add build-base nodejs tzdata

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler

# bundle install --binstubs -> will be deprecated
#RUN bundle binstubs --all
RUN bundle install --binstubs

COPY . .