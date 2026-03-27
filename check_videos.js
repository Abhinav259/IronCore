const ids = [
  'rT7DgCr-3pg', 'bEv6CCg2BC8', 'op9kVnSso6Q', 'eGo4IYlbE5g', 'IODxDxX7oi4',
  'QAQ64hK4Xxs', 'G8l_8chR5BE', 'ykJmrZ5v0Oo', 'nRiJVZDpdL0', '2-LAMcpzODU',
  'QOVaHwm-Q6U', 'IZxyjW7MPJQ', '-M4-G8p8fmc', 'pSHjTRCQxIw', 'Xyd_fa5zoEU',
  'CAwf7n6Luuc', 'YyvSfVjQeL0', 'ELOCsoDSmrg', 'McgO_8MaKK8', 'GZbfZ033f74',
  'JCXUYuzwNrM', '2C-uNgKwPLE', '8bbE64NuDTU', 'g_QVZHhfcA8', 'jEYgJzWqA20',
  'SrqOu55lrYU', 'L8fvypPrzzs', 'NXr4Fw8q60o', 'qEwKCR5JCog', '3VcKaXpzqRo',
  'vB5OHsJ3EME', 'PjZz9c12214', '0G-EaW1m05w', 'cdOeqZCGMeo', 'xUm0BiZCWlQ',
  '6Z15_WdXmVw', 'Iwe6AmxVf7o', '0UBRfiNWJqk', 'V_2D7e_gG-Q', 'V8d6XjgIGCE',
  'cJRVVxmytaM', 'zC3nLlEvin4', 'v-mQjmISrVk', 'xWeightO48s', 'JbyjNymZOt0',
  '-t7fuZ0KhDA', 'd_KZxkY_0cM', '2z8JmcrW-As', 'eozdVDA78K0', 'taI4XduLpTk',
  'j3IgkO7VPhk', 'LfyQBUKR8SE', 'nEF0bv2FW94', 'amCU-ziHITM', 'Z5ZAwjKgZWM',
  'WvLMauqrnK8', '0tn5K9NlCfo', 'iqXJq_0B8zU', 'vA8B3l1P2oQ', 'rqiTQjX4Qmw',
  'wkD8rjkodUI', 'l4kQd9eWclE', 'Pr1ieGZ5atk', 'nmwgirgXLYM'
];

async function check() {
  const broken = [];
  for (const id of ids) {
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
      if (!res.ok) {
        broken.push(id);
      }
    } catch (e) {
      broken.push(id);
    }
  }
  console.log("BROKEN:", broken.join(','));
}
check();
