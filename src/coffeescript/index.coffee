###
(c) Jan Pilgenröder
###

write = (x) -> $("#console").append x
writeln = (x) -> $("#console").append x + "<br>"

isPrime = (n) ->
  for i in [2..n-1]
    if n % i is 0
      return false
  true


$(document).ready ->
  writeln "Here are a couple of prime numbers:"
  write "#{i}, " for i in [1..10000].filter(isPrime)