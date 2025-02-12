def prepare_gifts(gifts):
  unique_gifts = list(set(gifts))
  unique_gifts.sort()
  return unique_gifts

gifts1 = [3, 1, 2, 3, 4, 2, 5]
prepared_gifts1 = prepare_gifts(gifts1)
print(prepared_gifts1)

gifts2 = [6, 5, 5, 5, 5]
prepared_gifts2 = prepare_gifts(gifts2)
print(prepared_gifts2) 

gifts3 = []
prepared_gifts3 = prepare_gifts(gifts3)
print(prepared_gifts3)
