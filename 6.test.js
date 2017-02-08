const assert = require('assert')

const findPath = require('./6')

const jsonObject = `{
  "name": "William Shakespeare",
  "dead" : true,
  "works" : [
    {
      "name" : "Romeo and Juliet",
      "published" : 1591,
      "isAwesome" : true
    },
    {
      "name" : "Richard III",
      "published" : 1592,
      "isAwesome" : false
    }
  ],
  "favoriteSites" : [
    "tumblr",
    "4chan"
  ]
}`

assert(findPath(jsonObject, '4chan') === 'favoriteSites -> 1')

console.log('All tests have passed')
