def most_common(nums):
    count_dict = {}
    
   
    for num in nums:
        count_dict[num] = count_dict.get(num, 0) + 1


    most_common_num = max(count_dict, key=count_dict.get)
    
    return most_common_num
  nums = [1, 3, 2, 3, 4, 3, 2, 1, 1]
print(most_common(nums)) 
