import reverseWords from "../string/reverseWords";


test('reverse "Let\'s go" to "s\'teL og"', () => {
  expect(reverseWords("go")).toBe("og")
})

test('reverse "Let\'s go" to "s\'teL og"', () => {
  expect(reverseWords("Let's go")).toBe("s'teL og")
})

