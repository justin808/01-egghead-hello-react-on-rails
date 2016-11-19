class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }

    @double_number_props = { value: "10" }
  end
end
