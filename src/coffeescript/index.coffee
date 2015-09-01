###
(c) Jan Pilgenröder
###

print = (x) -> $("#console").append x
println = (x) -> $("#console").append "#{x}<br>"


$(document).ready ->
  println
  println "#{i} * #{i} = #{i*i}" for i in [1..100] 
