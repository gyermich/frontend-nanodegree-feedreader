/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Тestс that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all feeds have url defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
            });
        });


        /* Tests that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feeds have a name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.url).not.toBeNull();
            });
        });

    });

    describe('The menu', function() {
        /* Ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            body = $('body');
            expect($('body').attr('class')).toEqual('menu-hidden');
        });

        /* Ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when menu icon is clicked', function() {
            body = $('body');
            menuIcon = $('.menu-icon-link')

            menuIcon.click()
            expect(body.attr('class')).not.toEqual('menu-hidden');

            menuIcon.click()
            expect($('body').attr('class')).toEqual('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            })
        })

        it('contains at least a single entry within the feed container', function(done) {
            expect($('.feed').children.length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let oldFeed, newFeed;

        beforeEach(function(done){
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                done();
            })
        })

        it('changes content when new feed is loaded', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(oldFeed).not.toEqual(newFeed);
                done();
            })
        });

    });

}());
