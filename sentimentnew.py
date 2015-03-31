def main():
    print("Hello there")
    badCount = 0
    bads = bad()
    goods = good()
    midsummer = script()
    
    goodCount = 0
    wordCount = 0
    count = 0
    for line in midsummer:
        indexCount = 0
        for word in line:
            wordCount = wordCount + 1
            if goods.count(word) > 0:
                if indexCount > 0 and line[indexCount-1] == "not" or line[indexCount-1] == "no" :
                    badCount = badCount + 1
                else:
                    goodCount = goodCount + 1
            if bads.count(word) > 0:
                if indexCount > 0 and line[indexCount-1] == "not" or line[indexCount-1] == "no" :
                    goodCount = goodCount + 1
                else:
                    badCount = badCount + 1
            indexCount = indexCount + 1
    print("Good word count is: ", goodCount)
    print("Bad word count is: ", badCount)
    print("Erich Zann word count is: ", wordCount)
    calculate(goodCount, badCount, wordCount)

def calculate(goodCount, badCount, wordCount):
    if(goodCount > badCount):
        print("The chosen work is ", round((goodCount/(goodCount + badCount))*100, 2), " % positive")
    if(badCount > goodCount):
        print("The chosen work is ", round((badCount/(goodCount + badCount))*100, 2), "% negative")

def script():
    midsummer = []
    fIn = open("hunger.txt", 'r')
    for line in fIn:
        words = line.split(' ')
        newWords = []
        for word in words:
            newword = word.strip([',' ';' ':' '.' '/"'])
            newWords.append(newword)
        midsummer.append(newWords)
    return midsummer
    

def bad():
    bads = []
    fIn = open("bad_words.txt", 'r')
    for line in fIn:
        if line[0] != ';':
            line.strip()
            out = line.strip('\n')
            bads.append(out)
    return bads

def good():
    goods = []
    fIn = open("good_words.txt", 'r')
    for line in fIn:
        if line[0] != ';':
            line.strip()
            out = line.strip('\n')
            goods.append(out)
    return goods
