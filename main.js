const str = `
010-1234-5678
theaegea@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=terminator
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

console.log(str.match(/(?<=@).{1,}/g));
