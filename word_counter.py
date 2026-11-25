# import re
# with open("test.txt" , "r" , encoding="utf-8") as file:
#     text = file.read()

# lower_text = text.lower()
# words = re.findall(r"\b[a-z0-9]+\b" , lower_text)
# word_count = {}
# for word in words:
#     word_count[word] = word_count.get(word , 0) + 1

# sorted_words = sorted(
#     word_count.items(),
#     key=lambda item:item[1],
#     reverse=True
# )
# top_10_words = sorted_words[:10]
# print("top 10 most common words:") 

# for index, (word , count) in enumerate(top_10_words , start=1):
#     print(f"{index}. {word} : {count}")


import csv 
total = 0
count = 0

with open("student.csv" , "r"  , encoding="utf-8")as file:
    reader = csv.DictReader(file)

    for row in reader:
        total += float(row["salary"])
        count += 1

if count > 0:
    average = total / count
    print("Average marks:" , average)
else :
    print("No data found")           