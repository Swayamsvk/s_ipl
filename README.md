Page Load Time:-

The page load time of my app varies a little bit when I run my app again and again but it takes approximately 61.25ms.

I calculated the page load time by using profiler in react devtools extension where the page load time is mentioned as Render Duration.

I optimised the page load time using Suspense and React.lazy().Suspense component lets you wait for some code to load.React.lazy() is a function that lets you load react components lazily through code splitting.By the use of both we can reduce the loading time of our code.Here are the following steps I took:-

1.Import Suspense and lazy in "Main.js" file as it is calling many components and not in "App.js" as it calls only two components and one of them contains only static design.
2.Set up lazy in import for the components which I want to load after the other components which don't hava lazy function.
3.Wrap the components imported with lazy function in suspense tag.
