# Create a Jekyll container from a Ruby Alpine image
# At a minimum, use Ruby 2.5 or later
# https://pages.github.com/versions/

FROM ruby:2.7.4-alpine3.14
RUN apk update && apk add --no-cache build-base gcc cmake git nodejs tzdata

# Update the Ruby bunlder and install Jekyll
RUN gem update --system
RUN gem update bundler
RUN gem install bundler jekyll

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./

# bundle install --binstubs -> will be deprecated
#RUN bundle binstubs --all
RUN bundle install --binstubs

COPY . .
