#f_first refers everything relative to f1.txt
#f_second refers everything relative to f2.txt

from multiprocessing import log_to_stderr
from pydoc import describe
from tabnanny import check
from textwrap import fill

text_for_f_first = "Hola soy Ivan"
text_for_f_second = "Me encanta python"

letters_f_first = []
letters_f_second = []

listLetters_f_first = ()
listLetters_f_second = ()

def checkWhiteSpaces( arr , item ):
    if item != " ":
        arr.append( item )

for i in text_for_f_first:
    checkWhiteSpaces( letters_f_first , i )

for j in text_for_f_second:
    checkWhiteSpaces( letters_f_second , j )

listLetters_f_first = list( map( lambda x :x , letters_f_first ) )
listLetters_f_second = list( map( lambda x:x , letters_f_second ))

listLetters_f_first.sort()
listLetters_f_second.sort()

def fillFile( file , item , sign ):
    if sign == True: 
        return file.write( item + "\n" )      
    else:
        return file.write( item )

path_file_f_first = "filesTXT/f1.txt"
path_file_f_second = "filesTXT/f2.txt"
path_file_f_third = "filesTXT/f3.txt"
f_first = open( path_file_f_first , "w" )
f_second = open( path_file_f_second , "w" )

sign = True

for items in listLetters_f_first:
    fillFile( f_first , items , sign )

for items in listLetters_f_second:
    fillFile( f_second ,items , sign )

f_first.close()
f_second.close()
f_first = open( path_file_f_first , "r" )
f_second = open( path_file_f_second , "r" )
f_third = open( path_file_f_third , "w" )
result_f_first = ""
result_f_second = ""

for itemsfile in f_first.readlines():
    result_f_first+=itemsfile

for itemsFile in f_second.readlines():
    result_f_second+=itemsFile

sign = False

fillFile( f_third , ( result_f_first + result_f_second ) , sign = True )

f_first.close()
f_second.close()
f_third.close()

f_third = open( path_file_f_third , "r" )

#Print result f3.txt by display

print( "Content shown sorted alphabeticly by f1.txt and f2.txt\n" )
for itemsFile in f_third.readlines():
    print( itemsFile )
