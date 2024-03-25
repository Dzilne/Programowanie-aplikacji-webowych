def is_wk_word(word):
    count_w = word.count('w')
    count_k = word.count('k')
    return count_w == count_k

with open('przyklad.txt', 'r') as file:
    with open('wyniki4_1.txt', 'w') as output_file:
        for line in file:
            words = line.strip().split()
            for word in words:
                if is_wk_word(word):
                    output_file.write(word + '\n\n')