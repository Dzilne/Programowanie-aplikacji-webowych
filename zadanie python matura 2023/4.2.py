def count_letters(word):
    letter_count = {}
    for letter in word:
        letter_count[letter] = letter_count.get(letter, 0) + 1
    return letter_count

def count_wakacje_words(letter_count):
    required_letters = {'w': 1, 'a': 2, 'k': 1, 'c': 1, 'j': 1, 'e': 1}
    max_wakacje_words = float('inf')
    for letter, count in required_letters.items():
        if letter_count.get(letter, 0) < count:
            return 0
        max_wakacje_words = min(max_wakacje_words, letter_count[letter] // count)
    return max_wakacje_words

with open('przyklad.txt', 'r') as file:
    with open('wyniki4_2.txt', 'w') as output_file:
        for line in file:
            words = line.strip().split()
            wakacje_counts = []
            for word in words:
                letter_count = count_letters(word)
                wakacje_count = count_wakacje_words(letter_count)
                wakacje_counts.append(wakacje_count)
            output_file.write(' '.join(map(str, wakacje_counts)) + '\n')
