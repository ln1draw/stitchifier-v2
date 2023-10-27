# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = {
      sectionsWide: 1,
      sectionsHigh: 1,
      unitWidth: 20,
      backstitchInstructions: DEFAULT_BACKSTITCH_INSTRUCTIONS,
      triangleInstructions: DEFAULT_TRIANGLES
    }
  end

  DEFAULT_TRIANGLES = [
    [5, 2],
    [6, 2],
    [2, 7],
    [2, 8],
    [2, 9],
    [3, 8],
    [3, 9],
    [4, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [9, 8],
    [8, 8],
    [9, 7],
    [2, 2, 1],
    [4, 2, 2],
    [7, 2, 1],
    [9, 2, 2],
    [2, 6, 4],
    [3, 7, 4],
    [4, 8, 4],
    [5, 9, 4],
    [6, 9, 3],
    [7, 8, 3],
    [8, 7, 3],
    [9, 6, 3],
    [5, 3, 2],
    [6, 3, 1]
  ]

  DEFAULT_BACKSTITCH_INSTRUCTIONS = [
    {
        starting: {x: 1, y: 3},
        ending: {x: 2, y: 1}
    },
    {
        starting: {x: 2, y: 1},
        ending: {x: 3, y: 1}
    },
    {
        starting: {x: 3, y: 1},
        ending: {x: 5, y: 3}
    },
    {
        starting: {x: 5, y: 3},
        ending: {x: 7, y: 1}
    },
    {
        starting: {x: 7, y: 1},
        ending: {x: 8, y: 1}
    },
    {
        starting: {x: 8, y: 1},
        ending: {x: 9, y: 3}
    },
    {
        starting: {x: 9, y: 3},
        ending: {x: 9, y: 5}
    },
    {
        starting: {x: 9, y: 5},
        ending: {x: 5, y: 9}
    },
    {
        starting: {x: 5, y: 9},
        ending: {x: 1, y: 5}
    },
    {
        starting: {x: 1, y: 5},
        ending: {x: 1, y: 3}
    }
  ]
end
