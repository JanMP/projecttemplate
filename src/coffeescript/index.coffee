###
(c) Jan Pilgenröder
###

print = (x) -> $(#console).append x
println = (x) -> $(#console).append "#{x}\n"

$(document).ready ->
  print "Hello World"
