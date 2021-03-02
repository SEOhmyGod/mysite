## Self-correcting Math Exercises

Kids are **stupid**. That's why they go to school, to be less so. One important part of the destupiding process is to teach them maths. The problem with maths is that it requires a **lot** of practice, **repetitive** practice and then some poor fucker **(me)** has to **correct** it. [A rough example](https://www.seohmygod.me/sitemap-pages.xml) of a tool in order to solve some of these issues can be found at the aforementioned link. The idea is to generate a random list of math exercises where the answer to the previous exercise is the first addend in a subsequent exercise. This way the kids can figure out themselves if they calculated it correctly, and still get that sweet, sweet practice in **without** further teacher input and control. This doc will list the requirements of this tool, and serve as a guideline / roadmap for execution.


## Main Requirements
- This should be a Web app, mounted on a page here in this domain
- A visitor should be able to generate a list of self correcting math exercises
  * all numbers used in exercises should be **whole numbers**
  * Enter the start number
  * default 10
  * option for 50 (to represent a normal school week, 5 lists of 10 entries
  * custom number
  * randomize order of list (optional, but should work such that in the case of 50, the *first* entry on the 'Monday' and the *last* entry on the 'Friday' should not move, and randomizing should only occur *within* it's own set
- The user should be able to define several difficulty factors, such as:
  * Number range (typically 50-1000, defined as the max number that can be used in any exercise)
  * Which operators can be utilized: **(+,-,*,/)**
    * expected groupings: **(+,-) AND (*,/)**
  * Whether the result of an exercise can traverse the:
    * 10s
    * 100s
      * both 100s & 10s in the same exercise (i.e. 242+99)
      * or just 100s (i.e. 241 + 100)
    * The maximum times tables to be used in multiply and divide operations (max 10, or max 15 for example)
