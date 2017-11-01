pages = [
  "applied design",
  "attributions",
  "basic part",
  "bioinformatics workshop",
  "collection",
  "composite part",
  "contribution",
  "demonstrate",
  "description",
  "design",
  "drylab",
  "engagement",
  "entrepreneurship",
  "expirements",
  "gold integrated",
  "hardware",
  "home",
  "hp gold",
  "hp silver",
  "human practices",
  "icon-a-thon",
  "improve",
  "integrated practices",
  "interlab",
  "measurement",
  "model",
  "notebook",
  "parts",
  "parts collection",
  "plant",
  "podcasts",
  "proof",
  "results",
  "saftey",
  "silver",
  "software",
  "team",
  "wetlab"
]

link = [
  "http://2017.igem.org/Team:Toronto/Applied_Design",
  "http://2017.igem.org/Team:Toronto/Attributions",
  "http://2017.igem.org/Team:Toronto/Basic_Part",
  "http://2017.igem.org/Team:Toronto/Bioinformatics-Workshop",
  "http://2017.igem.org/Team:Toronto/Part_Collection",
  "http://2017.igem.org/Team:Toronto/Composite_Part",
  "http://2017.igem.org/Team:Toronto/Contribution",
  "http://2017.igem.org/Team:Toronto/Demonstrate",
  "http://2017.igem.org/Team:Toronto/Description",
  "http://2017.igem.org/Team:Toronto/Design",
  "http://2017.igem.org/Team:Toronto/Drylab",
  "http://2017.igem.org/Team:Toronto/Engagement",
  "http://2017.igem.org/Team:Toronto/Entrepreneurship",
  "http://2017.igem.org/Team:Toronto/Experiments",
  "http://2017.igem.org/Team:Toronto/Gold_Integrated",
  "http://2017.igem.org/Team:Toronto/Hardware",
  "http://2017.igem.org/Team:Toronto",
  "http://2017.igem.org/Team:Toronto/HP/Gold",
  "http://2017.igem.org/Team:Toronto/HP/Silver",
  "http://2017.igem.org/Team:Toronto/PnP",
  "http://2017.igem.org/Team:Toronto/Icon-a-thon",
  "http://2017.igem.org/Team:Toronto/Improve",
  "http://2017.igem.org/Team:Toronto/Integrated_Practices",
  "http://2017.igem.org/Team:Toronto/InterLab",
  "http://2017.igem.org/Team:Toronto/Measurement",
  "http://2017.igem.org/Team:Toronto/Model",
  "http://2017.igem.org/Team:Toronto/Notebook",
  "http://2017.igem.org/Team:Toronto/Parts",
  "http://2017.igem.org/Team:Toronto/Part_Collection",
  "http://2017.igem.org/Team:Toronto/Plant",
  "http://2017.igem.org/Team:Toronto/Podcast",
  "http://2017.igem.org/Team:Toronto/Proof",
  "http://2017.igem.org/Team:Toronto/Results",
  "http://2017.igem.org/Team:Toronto/Safety",
  "http://2017.igem.org/Team:Toronto/Silver",
  "http://2017.igem.org/Team:Toronto/Software",
  "http://2017.igem.org/Team:Toronto/Team",
  "http://2017.igem.org/Team:Toronto/Wetlab"
]

  function autocomplete() {
    console.log('Autocomplete has loaded');
    var input = document.getElementById('autocomplete');
    var suggest = document.getElementById("auto-suggest");
    var search = document.getElementById("search")

    input.addEventListener('blur', function() {
      input.value = '';
      setTimeout(function() {
        suggest.innerHTML = '';
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
