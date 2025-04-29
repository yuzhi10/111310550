def classify_even_odd(numbers):
    result = {
        'even': [],
        'odd': []
    }
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
classified = classify_even_odd(numbers)
print(classified)
