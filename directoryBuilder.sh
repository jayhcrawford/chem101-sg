cat newOutline.txt | while IFS=$'\n' read LINE
    do
        mkdir ./$LINE
    done