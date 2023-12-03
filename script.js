// Your JavaScript code from the original file
// Make sure to include any other JavaScript code you have
const text = document.querySelector(&quot;.quote&quot;);
			const author = document.getElementById(&quot;author&quot;);
			const tweetButton = document.querySelector(&quot;#twitter&quot;);
			const facebookButton = document.querySelector(&quot;#facebook&quot;);
			const darkModeSwitch = document.querySelector(&quot;#toggle-dark-mode&quot;);

			const getNewQuote = async () =&gt; {
			//api for quotes
			var url =
			&quot;https://raw.githubusercontent.com/dinhkhanhtung/dkt/main/new-quotes.json&quot;;

			// fetch the data from api
			const response = await fetch(url);

			//convert response to json and store it in quotes array
			const allQuotes = await response.json();

			// Generates a random number between 0 and the length of the quotes array
			const indx = Math.floor(Math.random() * allQuotes.length);

			//Store the quote present at the randomly generated index
			const quote = allQuotes[indx].text;

			//Store the author of the respective quote
			const auth = allQuotes[indx].author;

			if (auth == null) {
			author.innerHTML = &quot;Anonymous&quot;;
			} else {
			author.innerHTML = &quot;~ &quot; + auth;
			}

			//function to dynamically display the quote and the author
			text.innerHTML = quote;

			//tweet the quote
			tweetButton.href = &quot;https://twitter.com/intent/tweet?text=&quot; +
			encodeURIComponent(text.innerHTML) + &quot; ~ &quot; +
			encodeURIComponent(author.innerHTML);

			// share on Facebook
			facebookButton.href = &quot;https://www.facebook.com/sharer/sharer.php?u=&quot; +
			encodeURIComponent(window.location.href);
			};

			document.getElementById(&quot;new-quote&quot;).addEventListener(&quot;click&quot;,
			getNewQuote);

			tweetButton.addEventListener(&quot;click&quot;, () =&gt; {
			window.open( &quot;https://twitter.com/intent/tweet?text=&quot; +
			encodeURIComponent(text.innerHTML) + &quot; ~ &quot; +
			encodeURIComponent(author.innerHTML),
			&quot;_blank&quot;
			);
			});

			facebookButton.addEventListener(&quot;click&quot;, () =&gt; {
			window.open( &quot;https://www.facebook.com/sharer/sharer.php?u=&quot; +
			encodeURIComponent(window.location.href),
			&quot;_blank&quot;
			);
			});

			darkModeSwitch.addEventListener(&quot;change&quot;, () =&gt; {
			document.documentElement.classList.toggle(&quot;dark-mode&quot;,
			darkModeSwitch.checked);
			});

			const speechButton = document.getElementById(&#39;speech&#39;);
			speechButton.addEventListener(&#39;click&#39;, () =&gt; {
			// Add code for handling the speech button click event (if needed)
			alert(&#39;Speech button clicked!&#39;);
			});

			const copyButton = document.getElementById(&#39;copy&#39;);
			copyButton.addEventListener(&#39;click&#39;, () =&gt; {
			// Add code for handling the copy button click event (if needed)
			alert(&#39;Copy button clicked!&#39;);
			});

			getNewQuote();
