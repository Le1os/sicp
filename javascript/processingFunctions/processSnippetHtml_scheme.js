import recursiveProcessPureText from "./recursiveProcessPureText";

export const processSnippetHtmlScheme = (node, writeTo) => {
  if (node.getAttribute("HIDE") == "yes") {
    return;
  }

  const schemeSnippet = node.getElementsByTagName("SCHEME")[0];
  if (schemeSnippet) {
    const codeArr = [];
    recursiveProcessPureText(schemeSnippet.firstChild, codeArr);
    const codeStr = codeArr.join("").trim();

    writeTo.push("<pre class='prettyprint no-eval'>\n");
    writeTo.push(codeStr);
    writeTo.push("\n</pre>");

    let schemeOutputSnippet = node.getElementsByTagName("SCHEMEOUTPUT")[0];
    if (schemeOutputSnippet) {
      writeTo.push("<pre class='prettyprintoutput'>\n");
      writeTo.push(schemeOutputSnippet.firstChild.nodeValue);
      writeTo.push("\n</pre>");
    }
  }
};

export default processSnippetHtmlScheme;
