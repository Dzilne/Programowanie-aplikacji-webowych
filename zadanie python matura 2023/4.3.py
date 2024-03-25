def count_letters(word):
    letter_count = {}
    for letter in word:
        letter_count[letter] = letter_count.get(letter, 0) + 1
    return letter_count

def min_letters_to_remove(word):
    required_letters = {'w': 1, 'a': 2, 'k': 1, 'c': 1, 'j': 1, 'e': 1}
    letter_count = count_letters(word)
    min_remove_count = float('inf')
    for letter, count in required_letters.items():
        if letter_count.get(letter, 0) < count:
            return len(word)  
        min_remove_count = min(min_remove_count, letter_count[letter] - count)
    return min_remove_count

with open('przyklad.txt', 'r') as file:
    with open('wyniki4_3.txt', 'w') as output_file:
        for line in file:
            words = line.strip().split()
            min_remove_counts = [min_letters_to_remove(word) for word in words]
            output_file.write(' '.join(map(str, min_remove_counts)) + '\n')
