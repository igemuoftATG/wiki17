var pages = [
  "attributions",
  "collaboration",
  "contribution",
  "demonstrate",
  "description",
  "design",
  "drylab",
  "engagement",
  "expirements",
  "home",
  "improve",
  "interlab",
  "model",
  "notebook",
  "parts",
  "pnp",
  "results",
  "saftey",
  "software",
  "team",
  "wetlab"
]

var link = ["index.html", "_navbar_snippits.html","#","#","#"]

function autocomplete() {
  var input = document.getElementById('autocomplete');
  var suggest = document.getElementById("auto-suggest");
  var search = document.getElementById("search")

  input.addEventListener('blur', function() {
    input.value = '';
    setTimeout(function() {
      suggest.innerHTML = '';
      console.log('suggest is empty');
    }, 100);
  });

  input.addEventListener("keyup", function() {

    matches = [];
    pages.forEach(function(elem, i) {
      if (elem.includes(input.value.toLowerCase()) && input.value != '') {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var text = document.createTextNode(elem.toUpperCase())

        a.setAttribute('href', link[i])
        a.appendChild(text)
        li.appendChild(a)

        matches.push(li);
        // console.log(matches);
      }
    });
    // console.log(suggest)
    suggest.innerHTML='';
    if (matches.length == 0) {
      search.style.display = 'none';
    } else {
      search.style.display = 'block';
      matches.forEach(function(elem) {
        suggest.appendChild(elem)
      });
    }
    // console.log(pages.includes(input.value));
  });
}

autocomplete();
