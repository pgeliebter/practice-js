=begin
string containing jumbled letters from concat words.
each word is a numeral from zero to nine.
and they can repeat

write a program that returns integers in asscending order corresponding to the shuffled letters of the string.

input = "veiifogvweesotwnetnvfeheiot"
output = 1225578

HASHMAP!


so to start i will define a function that takes in string.
i will then iterate through the string and add each instance to a hash I will then print the hash



def numbers(string)
  num_hash = Hash.new(0)
  iterate through string and add to hash and
  print the hash
end


next I will see how many one's i can make


i will start an empty big_array to store numbers
I will create an each_char statement on the string of "one"
i will duplicate the num_hash for local tampering
i will start an empty array to store value
if  num_hash[char] does not exist then
  break so we can stop evaluating
else
   subtract 1 from the num_hash[char]
   shovel in the letter into empty array
end
if array.length equals "one".length
  then shovel 1 into big_array
end


  Ruby Stage 3

  at this point I will get diminishing returns if i try to solve the rest of the problem so I will go ahead and start to clean up my code




=end

input = "veiifogvweesotwnetnvfeheiot"

def num_hash(string)
  num_hash = Hash.new(0)
  string.each_char do |letter|
    num_hash[letter] += 1
  end
  return numbers(num_hash)
end

def numbers(num_hash)
  big_array = []
  number = "one"
  inner_array = []
  number.each_char do |char|
    num_hash_dup = num_hash
    num_hash_dup[char] == 0 ? break : num_hash_dup[char] -= 0; inner_array << char
  end
    inner_array.length != number.length ? nil : big_array << 1; num_hash = num_hash_dup
  end
  num_hash = num_hash_dup
  return big_array
end

p num_hash(input)
