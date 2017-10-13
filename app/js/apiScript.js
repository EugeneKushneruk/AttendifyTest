!function () {
    function t(t) {
        return t[Math.floor(Math.random() * t.length)]
    }

    function e() {
        var e = t(f), o = w[e.author];
        return {
            id: p++,
            author: e.author,
            photo: "http://dkldiv.attendify.io/img/" + o.img,
            position: o.position,
            text: e.text
        }
    }

    function o(t, e, o, a, n) {
        var i = document.createElement("article"), r = document.createElement("img"),
            s = document.createElement("span"), h = document.createElement("span"), l = document.createElement("span"),
            u = document.createElement("div");
        i.setAttribute("class", c.message_post), r.setAttribute("class", c.post_photo), s.setAttribute("class", c.post_author), h.setAttribute("class", c.post_position), l.setAttribute("class", c.post_time), u.setAttribute("class", c.post_text), i.dataset.id = t, s.appendChild(document.createTextNode(o)), h.appendChild(document.createTextNode(a)), l.appendChild(document.createTextNode("0m"));
        var p = +new Date, g = 20, y = setInterval(function () {
            var t = Math.floor((new Date - p) / 6e4) + "m";
            l.textContent = t, --g || clearInterval(y)
        }, 6e4);
        u.appendChild(document.createTextNode(n)), i.appendChild(r), i.appendChild(s), i.appendChild(h), i.appendChild(l), i.appendChild(u), r.setAttribute("src", e), r.addEventListener("load", function () {
            m.prepend(i), d["msg#" + t] = {el: i, elText: u, text: n, id: t, banned: !1}
        })
    }

    function a() {
        (m = document.querySelector("[data-wall=attendify]")) ? m.dataset.autorun && l() : console.log('Not found eventWall container. Use attribute data-wall="attendify"')
    }

    function n(t) {
        var e = "msg#" + t;
        e in d && (d[e].el.classList.add(c.banned_post), d[e].elText.textContent = "This message is not available because it includes potentially sensitive content.", d[e].banned = !0)
    }

    function i(t) {
        var e = "msg#" + t;
        e in d && (d[e].el.classList.remove(c.banned_post), d[e].elText.textContent = d[e].text, d[e].banned = !1)
    }

    function r(t) {
        var e = "msg#" + t;
        e in d && (d[e].banned ? i(t) : n(t))
    }

    function s(t) {
        for (var e in g) c[e] = t[e]
    }

    function h() {
        var t = 1e3 * Math.floor(10 + 10 * Math.random()), a = e();
        o(a.id, a.photo, a.author, a.position, a.text), y = setTimeout(h, t)
    }

    function l() {
        null === y && h()
    }

    function u() {
        y && (clearTimeout(y), y = null)
    }

    var m, d = {}, p = 1024, g = {
        post_author: "author",
        post_position: "position",
        post_time: "time",
        post_photo: "photo",
        post_text: "text",
        message_post: "post",
        banned_post: "banned"
    }, c = g, y = null, f = [{
        author: "Apu Nahasapeemapetilon",
        text: "For the next five minutes, I'm going to party like it's on sale for $19.99."
    }, {author: "Apu Nahasapeemapetilon", text: "I can't believe you don't shut up!"}, {
        author: "Barney Gumble",
        text: "We want chilly-willy! We want chilly-willy!"
    }, {
        author: "Bart Simpson",
        text: "Aren't we forgetting the true meaning of Christmas: the birth of Santa."
    }, {author: "Bart Simpson", text: "I can't promise I'll try, but I'll try to try."}, {
        author: "Bart Simpson",
        text: "I didn't think it was physically possible, but this both sucks and blows."
    }, {
        author: "Bart Simpson",
        text: "Inside every hardened criminal beats the heart of a ten-year-old boy."
    }, {
        author: "Bart Simpson",
        text: "My bones are so brittle. But I always drink plenty of ... malk?"
    }, {
        author: "Bart Simpson",
        text: "Priceless like a mother's love, or the good kind of priceless?"
    }, {
        author: "Bart Simpson",
        text: "There's only one thing to do at a moment like this: strut!"
    }, {author: "Bart Simpson", text: "I wash myself with a rag on a stick."}, {
        author: "Chief Wiggum",
        text: "Bake him away, toys."
    }, {
        author: "Chief Wiggum",
        text: "Boy, I tell ya, they only come out at night. Or in this case, the daytime."
    }, {
        author: "Chief Wiggum",
        text: "I'd rather let a thousand guilty men go free than chase after them."
    }, {
        author: "Chief Wiggum",
        text: "If he was going to commit a crime, would he have invited the number one cop in town? Now where did I put my gun? Oh yeah, I set it down when I got a piece of cake."
    }, {
        author: "Chief Wiggum",
        text: "This is Papa Bear. Put out an APB for a male suspect, driving a ... car of some sort, heading in the direction of ... you know, that place that sells chili. Suspect is hatless. Repeat, hatless."
    }, {
        author: "Chief Wiggum",
        text: "Uh, no you've got the wrong number. This is 9-1 ...  2."
    }, {author: "Comic Book Guy", text: "Now make like my pants, and split."}, {
        author: "Comic Book Guy",
        text: "Oh, loneliness and cheeseburgers are a dangerous mix."
    }, {author: "Dr. Nick Riviera", text: "Inflammable means flammable? What a country."}, {
        author: "Dr. Nick Riviera",
        text: "Well, if it isn't my old friend, Mr. McGreg, with a leg for an arm, and an arm for a leg."
    }, {author: "Fat Tony", text: "I don't get mad, I get stabby."}, {
        author: "Grampa Simpson",
        text: "Homer, you're as dumb as a mule and twice as ugly. If a strange man offers you a ride, I say take it!"
    }, {
        author: "Grampa Simpson",
        text: 'I used to be with it, but then they changed what "it" was, and now what I\'m with isn\'t it. And what\'s "it" seems weird and scary to me.'
    }, {
        author: "Grampa Simpson",
        text: "I'm filled with piss and vinegar! At first, I was just filled with vinegar."
    }, {
        author: "Grampa Simpson",
        text: "La ... tex con ... dome. Boy, I'd like to live in one of those!"
    }, {
        author: "Grampa Simpson",
        text: "My Homer is not a communist. He may be a liar, a pig, an idiot, a communist, but he is not a porn star."
    }, {
        author: "Hank Scorpio",
        text: "Hey, look at my feet. You like those moccasins? Look in your closet; there's a pair for you. Don't like them? Then neither do I! [throws them out the door] Get the hell outta here! Ever see a guy say good-bye to a shoe?"
    }, {author: "Hans Moleman", text: 'I was saying "Boo-urns."'}, {
        author: "Homer Simpson",
        text: "Another day, another box of stolen pens."
    }, {
        author: "Homer Simpson",
        text: "I would kill everyone in this room for a drop of sweet beer."
    }, {
        author: "Homer Simpson",
        text: "I'm trying to be a sensitive father, you unwanted moron!"
    }, {
        author: "Homer Simpson",
        text: "It's not easy to juggle a pregnant wife and a troubled child, but somehow I managed to fit in eight hours of TV a day."
    }, {
        author: "Homer Simpson",
        text: "Just because I don't care doesn't mean that I don't understand."
    }, {
        author: "Homer Simpson",
        text: "Now we play the waiting game ... Ahh, the waiting game sucks. Let's play Hungry Hungry Hippos!"
    }, {author: "Homer Simpson", text: "Save me, Jebus!"}, {
        author: "Homer Simpson",
        text: "Shut up, brain, or I'll stab you with a Q-tip!"
    }, {author: "Homer Simpson", text: "Stupid sexy Flanders!"}, {
        author: "Homer Simpson",
        text: "Stupider like a fox!"
    }, {
        author: "Homer Simpson",
        text: "To alcohol! The cause of, and solution to, all of life's problems."
    }, {
        author: "Homer Simpson",
        text: "Wait a minute. Bart's teacher is named â€˜Krabappel'? Oh, I've been calling her â€˜Crandall.' Why didn't anyone tell me? Ohhh, I've been making an idiot out of myself!"
    }, {
        author: "Homer Simpson",
        text: "Well, crying isn't gonna bring him back, unless your tears smell like dog food. So you can either sit there crying and eating can after can of dog food until your tears smell enough like dog food to make your dog come back, or you can go out there and find your dog."
    }, {
        author: "Homer Simpson",
        text: "When a woman says nothing's wrong, that means everything's wrong. And when a woman says everything's wrong, that means everything's wrong. And when a woman says something's not funny, you'd better not laugh your ass off."
    }, {author: "Homer Simpson", text: "You don't win friends with salad."}, {
        author: "Homer Simpson",
        text: "You must love this country more than I love a cold beer on a hot Christmas morning."
    }, {
        author: "Jasper",
        text: "Talking out of turn ... that's a paddling. Looking out the window ... that's a paddling. Staring at my sandals ... that's a paddling. Paddling the school canoe ... ooh, you better believe that's a paddling."
    }, {author: "Kent Brockman", text: "How can I prove we're live? Penis!"}, {
        author: "Kent Brockman",
        text: "Ladies and gentlemen, what you are seeing is a total disregard for the things St. Patrick's Day stand for. All this drinking, violence, destruction of property. Are these the things we think of when we think of the Irish?"
    }, {
        author: "Krusty the Clown",
        text: "Ahh, there's nothing better than a cigarette ...  unless it's a cigarette lit with a hundred-dollar bill."
    }, {author: "Krusty the Clown", text: "Does anybody hear me complaining about the breasts?"}, {
        author: "Lenny",
        text: "Ow, my eye! I'm not supposed to get pudding in it."
    }, {
        author: "Lionel Hutz",
        text: 'Well, he\'s kind of had it in for me ever since I accidently ran over his dog. Actually, replace "accidently" with "repeatedly," and replace "dog" with "son."'
    }, {
        author: "Lisa Simpson",
        text: "I'd be mortified if someone ever made a lousy product with the Simpson name on it."
    }, {author: "Marge Simpson", text: "Go out on a Tuesday? Who am I, Charlie Sheen?"}, {
        author: "Marge Simpson",
        text: "I don't mind if you pee in the shower, but only if you're taking a shower."
    }, {
        author: "Marge Simpson",
        text: "You know, FOX turned into a hardcore sex channel so gradually, I didn't even notice."
    }, {
        author: "Mayor Quimby",
        text: "Chat away. I'll just amuse myself with some pornographic playing cards."
    }, {
        author: "Mayor Quimby",
        text: "People, please. We're all frightened and horny, but we can't let some killer dolphins keep us from living and scoring!"
    }, {
        author: "Milhouse Van Houten",
        text: "But look! I got some cool pogs: Alf pogs! Remember Alf? He's back ... in pog form!"
    }, {
        author: "Milhouse Van Houten",
        text: "Remember the time he ate my goldfish, and you lied to me and said I never had any goldfish. Then why'd I have the bowl, Bart? Why did I have the bowl?"
    }, {author: "Milhouse Van Houten", text: "Everything's coming up Milhouse!"}, {
        author: "Milhouse Van Houten",
        text: "Trust me, Bart, it's better to walk in on both your parents than on just one of them."
    }, {
        author: "Moe Szyslak",
        text: "Hey, everybody! I'm a stupid moron with an ugly face and big butt and my butt smells and ... I like to kiss my own butt."
    }, {author: "Moe Szyslak", text: "Oh boy. Looks like it's suicide again for me."}, {
        author: "Moe Szyslak",
        text: "Science. What's science ever done for us? TV off."
    }, {
        author: "Mr. Burns",
        text: "Ironic, isn't it, Smithers? This anonymous clan of slack-jawed troglodytes has cost me the election. And yet, if I were to have them killed, I would be the one to go to jail. That's democracy for you."
    }, {author: "Mr. Burns", text: "Oops, lost a nail. Well, that's leprosy for you."}, {
        author: "Mr. Burns",
        text: "This is a thousand monkeys working at a thousand typewriters. Soon they'll have written the greatest novel known to man. Let's see. It was the best of times, it was the \"blurst\" of times! You stupid monkey!"
    }, {
        author: "Ned Flanders",
        text: "Feels like I'm wearing nothing at all ... nothing at all ... nothing at all!"
    }, {
        author: "Nelson Muntz",
        text: "Shoplifting is a victimless crime. Like punching someone in the dark."
    }, {
        author: "Principal Skinner",
        text: "(on phone) Lord, give me guidance ... That's right, the guidance department. Thank you, Mrs. Lord."
    }, {
        author: "Principal Skinner",
        text: "By the time I got to a phone, my discovery had already been reported by Principal Kohoutek. I got back at him, though ... him and that little boy of his."
    }, {
        author: "Professor Frink",
        text: "Ha ha wha. Oh, sorry I'm late. There was trouble at the lab with the running and the exploding and the crying when the monkeys stole the glasses off my head. Wh-ha ha."
    }, {
        author: "Professor Frink",
        text: "Unshrink you? Well that would require some sort of a Rebigulator, which is a concept so ridiculous it makes me want to laugh out loud and chortle ... "
    }, {author: "Ralph Wiggum", text: "Chocolate microscopes?"}, {
        author: "Ralph Wiggum",
        text: "It tastes like ... burning."
    }, {author: "Ralph Wiggum", text: "Me fail English? That's unpossible."}, {
        author: "Ralph Wiggum",
        text: "My cat's breath smells like cat food."
    }, {author: "Timothy Lovejoy, Jr.", text: "It's all over, people! We don't have a prayer!"}], w = {
        "Apu Nahasapeemapetilon": {position: "Owner of the Kwik-E-Mart", img: "Apu1.png"},
        "Barney Gumble": {img: "Barney1.png", position: "Bowling Alley"},
        "Bart Simpson": {img: "Bart_prank.png", position: "Student at Springfield Elementary School"},
        "Chief Wiggum": {img: "ChiefWiggum2.png", position: "The head of police of the S.P.D."},
        "Comic Book Guy": {img: "ComicBookGuy3.png", position: "The comic book guy"},
        "Dr. Nick Riviera": {position: "Quack Physician", img: "DrNickCostume.png"},
        "Fat Tony": {position: "The Springfield mob boss", img: "fat-tony-2.png"},
        "Grampa Simpson": {img: "GrampaComa.png", position: "World War II Veteran"},
        "Hank Scorpio": {position: "Owner of Globex Corporation", img: "Scorpio.png"},
        "Hans Moleman": {position: "mole-like man with extremely bad luck", img: "HansMoleman1.png"},
        "Homer Simpson": {position: "Nuclear Safety Inspector", img: "homer.png"},
        Jasper: {position: "Retired", img: "Jasper.png"},
        "Kent Brockman": {img: "KentBrockman3.png", position: "Channel 6 anchorman"},
        "Krusty the Clown": {img: "Krusty6.png", position: "The Clown"},
        Lenny: {position: "Co-worker of Homer Simpson", img: "Lenny1.png"},
        "Lionel Hutz": {position: "Lawyer & Realtor", img: "Lionel_Hutz.png"},
        "Lisa Simpson": {position: "Student at Springfield Elementary School"},
        "Milhouse Van Houten": {position: "Student at Springfield Elementary", img: "Milhouse1.png"},
        "Moe Szyslak": {position: "Bartender of Moe's Tavern", img: "MoePickleJar.png"},
        "Mr. Burns": {position: "Owner of The Power Plant", img: "MrBurns3.png"},
        "Ned Flanders": {position: "Owner at The Leftorium", img: "NedFlanders1.png"},
        "Nelson Muntz": {position: "Student at Springfield Elementary", img: "NelsonHaha.png"},
        "Principal Skinner": {position: "Principal of Springfield Elementary School", img: "Skinner1.png"},
        "Professor Frink": {position: "Professor", img: "ProfessorFrink1.png"},
        "Ralph Wiggum": {position: "Student at Springfield Elementary School", img: "RalphWiggum2.png"},
        "Timothy Lovejoy, Jr.": {position: "Reverend", img: "Lovejoy1.png"},
        "Marge Simpson": {position: "Homermaker", img: "MargeSimpson.png"},
        "Mayor Quimby": {position: "Mayor of Springfield", img: "Mayor.png"}
    };
    void 0 === window.AttendifyEventWall && (window.AttendifyEventWall = {
        toggleBanMessage: r,
        setClassNames: s,
        startWall: l,
        stopWall: u
    }), document.addEventListener("DOMContentLoaded", a)
}();