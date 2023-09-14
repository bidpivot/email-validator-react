export default function baseEmails({
  first: first,
  last: last,
  domain: domain,
  tld: tld,
}) {
  return `${first}@${domain}${tld}
${last}@${domain}${tld}
${first}${last}@${domain}${tld}
${first}.${last}@${domain}${tld}
${first[0]}${last}@${domain}${tld}
${first[0]}.${last}@${domain}${tld}
${first}${last[0]}@${domain}${tld}
${first}.${last[0]}@${domain}${tld}
${first[0]}${last[0]}@${domain}${tld}
${first[0]}.${last[0]}@${domain}${tld}
${last}${first}@${domain}${tld}
${last}.${first}@${domain}${tld}
${last}${first[0]}@${domain}${tld}
${last}.${first[0]}@${domain}${tld}
${last[0]}${first}@${domain}${tld}
${last[0]}.${first}@${domain}${tld}
${last[0]}${first[0]}@${domain}${tld}
${last[0]}.${first[0]}@${domain}${tld}
${first}-${last}@${domain}${tld}
${first[0]}-${last}@${domain}${tld}
${first}-${last[0]}@${domain}${tld}
${first[0]}-${last[0]}@${domain}${tld}
${last}-${first}@${domain}${tld}
${last}-${first[0]}@${domain}${tld}
${last[0]}-${first}@${domain}${tld}
${last[0]}-${first[0]}@${domain}${tld}
${first}_${last}@${domain}${tld}
${first[0]}_${last}@${domain}${tld}
${first}_${last[0]}@${domain}${tld}
${first[0]}_${last[0]}@${domain}${tld}
${last}_${first}@${domain}${tld}
${last}_${first[0]}@${domain}${tld}
${last[0]}_${first}@${domain}${tld}
${last[0]}_${first[0]}@${domain}${tld}`;
}
