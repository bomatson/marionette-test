require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

configure do
  enable :cross_origin
end

post '/apply' do
  content_type :json
  puts params
  { loan_amount: params[:loanAmount],
    loan_purpose: params[:loanPurpose],
    credit_score: params[:creditScore],
    first_name: params[:firstName],
    last_name: params[:lastName],
    middle_initial: params[:middleInitial],
    salary: params[:salary],
    rate: '3.4' }.to_json
end
