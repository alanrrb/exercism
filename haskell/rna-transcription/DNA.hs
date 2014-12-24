module DNA (toRNA) where

toRNA :: String -> String
toRNA = map nucleotideToRNA
  where nucleotideToRNA 'C' = 'G'
        nucleotideToRNA 'G' = 'C'
        nucleotideToRNA 'A' = 'U'
        nucleotideToRNA 'T' = 'A'
        nucleotideToRNA  _  = ' '
