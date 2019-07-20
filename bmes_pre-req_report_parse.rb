require 'csv'
puts "This program will tell you the pre-reqs for the course you enter as well as what the course is a pre-req for."
puts "What course are you interested in?"
desired_course = gets.chomp
puts "You have entered #{desired_course}."
pre_reqs = []
post_reqs = []
CSV.foreach("bmes_pre-req_report.csv") do |row|
  if desired_course == row[2]
    if row[20].start_with?('This')
      pre_reqs << row[20]
    else
      pre_reqs << "#{row[20]} is a pre-req for #{row[2]}."
    end
    
  end

  if desired_course == row[20]
    post_reqs << "#{desired_course} is a pre-req for #{row[2]}."
  end
end

puts pre_reqs.sort.uniq
puts
puts post_reqs.sort.uniq