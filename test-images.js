import https from 'https';

const ids = [
  '1571019614242-c5c5dee9f50b', // chest
  '1603287681836-b174ce5074c2', // back
  '1534438327276-14e5300c3a48', // shoulders
  '1581009146145-b5ef050c2e1e', // biceps
  '1530822847156-5df684ec5ee1', // triceps
  '1583454110551-21f2fa2afe61', // forearms
  '1571019613454-1cb2f99b2d8b', // abs
  '1434682881908-b43d0467b798', // quads
  '1574680096145-d05b474e2155', // hamstrings
  '1508215885820-4585e56135c8', // glutes
  '1552674605-db6ffd4facb5', // calves
  '1598971639058-fab3c3109a00', // upper back
  '1605296867304-46d5465a13f1', // lower back
  '1541534741688-6078c6bfb5c5', // lats
  '1581009137042-c552e485697a', // traps
  '1517836357463-d25dfeac3438'  // full body
];

ids.forEach(id => {
  https.get(`https://images.unsplash.com/photo-${id}?w=10`, (res) => {
    console.log(`${id}: ${res.statusCode}`);
  });
});
