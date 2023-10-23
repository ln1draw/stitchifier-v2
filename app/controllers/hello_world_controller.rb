# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { sectionsWide: 5, sectionsHigh: 2, unitWidth: 10 }
  end
end
