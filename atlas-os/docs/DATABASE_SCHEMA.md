# ATLAS OS Database Schema Draft

## users
- id
- email
- full_name
- created_at

## businesses
- id
- user_id
- name
- focus
- goal
- status
- created_at

## products
- id
- user_id
- business_id
- name
- type
- status
- price
- next_step
- notes
- created_at

## tasks
- id
- user_id
- title
- status
- priority
- due_date
- created_at

## ai_employees
- id
- name
- role
- system_prompt

## assets
- id
- user_id
- product_id
- file_name
- file_type
- url
- created_at

## revenue
- id
- user_id
- business_id
- product_id
- amount
- platform
- date
