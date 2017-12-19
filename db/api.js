var knex = require('./knex')

module.exports = {
  signIn: function() {

  },
  signUp: function(agentName, password) {
    return knex('my_user').insert({agentName: agentName, password: password}, '*')
  }
}
