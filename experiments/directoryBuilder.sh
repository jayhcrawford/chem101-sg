cat experiments-in-order-of-completion.txt | while IFS=$'\n' read LINE
    do
        mkdir ./$LINE
    done