export default function middleEmails({
  first: first,
  last: last,
  domain: domain,
  tld: tld,
  middle: middle,
}) {
  return `
${first[0]}${middle[0]}${last}@${domain}${tld}
${first[0]}${middle[0]}.${last}@${domain}${tld}
${first}${middle[0]}${last}@${domain}${tld}
${first}.${middle[0]}.${last}@${domain}${tld}
${first}${middle}${last}@${domain}${tld}
${first}.${middle}.${last}@${domain}${tld}
${first}-${middle[0]}-${last}@${domain}${tld}
${first}-${middle}-${last}@${domain}${tld}
${first[0]}${middle[0]}-${last}@${domain}${tld}
${first[0]}${middle[0]}_${last}@${domain}${tld}
${first}_${middle[0]}_${last}@${domain}${tld}
${first}_${middle}_${last}@${domain}${tld}`;
}
