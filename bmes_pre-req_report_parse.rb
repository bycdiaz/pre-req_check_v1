require 'csv'

puts "This program will tell you the pre-reqs for the course you enter as well as what the course is a pre-req for."
puts "What course are you interested in?"
desired_course = gets.chomp
puts "You have entered #{desired_course}."

def pre_req_check(desired_course)
  pre_reqs = []
  post_reqs = []

  # loops through each row of csv file.
  CSV.foreach("bmes_pre-req_report.csv") do |row|
    # Check for desired_course pre-reqs
    if desired_course == row[2]
      row[20].start_with?('This') ? pre_reqs << row[20] : pre_reqs << "#{row[20]} is a pre-req for #{row[2]}."
    end

    # check for desired_course post-reqs
    if desired_course == row[20]
      post_reqs << "#{desired_course} is a pre-req for #{row[2]}."
    end
  end

  puts pre_reqs.sort.uniq
  puts
  puts post_reqs.sort.uniq
end

pre_req_check(desired_course)