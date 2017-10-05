class IndexController < ApplicationController
  def index
    @props = {
      todos: [
        {
          id: 1,
          text: 'hogehoge',
          completed: false
        },
        {
          id: 2,
          text: 'fugafuga',
          completed: false
        },
        {
          id: 3,
          text: 'hogefuga',
          completed: true
        }
      ]
    }
  end
end
