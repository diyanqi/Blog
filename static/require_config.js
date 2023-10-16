window.requireConfig = {
    waitSeconds: 60,
    baseUrl: "/static",
    urlArgs: "cachebust=" + JS_VERSION,
    // TODO: only do this in production, keep separation for dev
    map: {
        "*": {
            "CSAApp": "Bundle",

            "Accordion": "Bundle",
            "Ajax": "Bundle",
            "Carousel": "Bundle",
            "CodeEditor": "Bundle",
            "Color": "Bundle",
            "DateTimePicker": "Bundle",
            "Decorators": "Bundle",
            "Device": "Bundle",
            "Dispatcher": "Bundle",
            "DoubleClickable": "Bundle",
            "Draggable": "Bundle",
            "FontAwesome": "Bundle",
            "ForumPanel": "Bundle",
            "FullScreenable": "Bundle",
            "GlobalContainer": "Bundle",
            "GlobalState": "Bundle",
            "GlobalStyle": "Bundle",
            "Input": "Bundle",
            "MarkupParser": "Bundle",
            "MarkupRenderer": "Bundle",
            "Modal": "Bundle",
            "NavElement": "Bundle",
            "NavManager": "Bundle",
            "NodeWrapper": "Bundle",
            "Plugin": "Bundle",
            "SVG": "Bundle",
            "SectionDivider": "Bundle",
            "SocialNotificationsStyle": "Bundle",
            "State": "Bundle",
            "Stem": "Bundle",
            "Store": "Bundle",
            "StoreMixins": "Bundle",
            "Style": "Bundle",
            "StyleElement": "Bundle",
            "TabArea": "Bundle",
            "Time": "Bundle",
            "Transition": "Bundle",
            "Translation": "Bundle",
            "UI": "Bundle",
            "UIBase": "Bundle",
            "UIPrimitives": "Bundle",
            "URLRouter": "Bundle",
            "Utils": "Bundle",

            "AjaxLoadingScreen": "Bundle",
            "FileSaver": "Bundle",
            "WebsocketCommandProcessor": "Bundle",
            "WebsocketSubscriber": "Bundle",

            "CSAStyle": "Bundle",
            "EmojiUI": "Bundle",
            "NavGlobalChat": "Bundle",
            "PopupDefinition": "Bundle",
            "ShareButtons": "Bundle",

            // Main globals
            "math": "Bundle",
            "util": "Bundle",

            "ArticleStore": "Bundle",
            "CSAState": "Bundle",
            "TagStore": "Bundle",
            "UserStore": "Bundle",

            // Account management
            "EmailConfirmed": "Bundle",
            "EmailUnsubscribe": "Bundle",
            "FacebookManager": "Bundle",
            "GoogleManager": "Bundle",
            "Login": "Bundle",
            "LoginModal": "Bundle",
            "PasswordReset": "Bundle",
            "PasswordResetFromKey": "Bundle",
            "UserHandle": "Bundle",
            "UserProfilePanel": "Bundle",
            "CSAUserSettingsPanel": "Bundle",
            "UserSettingsPanel": "Bundle",

            // Chat
            "ChatMarkupRenderer" : "Bundle",
            "ChatPlugin": "Bundle",
            "ChatWidget": "Bundle",
            "CommentWidget": "Bundle",
            "MessageThreadStore": "Bundle",
            "SocialNotifications": "Bundle",
            "VotingWidget": "Bundle",

            // Markup
            "CSAMarkup": "Bundle",
            "Latex": "Bundle",
            "MarkupEditor": "Bundle",
            "MarkupEditorModal": "Bundle",

            "AtMentionPlugin": "Bundle",
            "CSAChatPlugins": "Bundle",
            "EnterToSendPlugin": "Bundle",

            // Localization
            "LanguageStore": "Bundle",
            "TranslationStore": "Bundle",

            // Errors
            "ErrorHandlers": "Bundle",
            "ErrorMessageStore": "Bundle",

            "GenericErrorView": "Bundle",
            "GlobalRatings": "Bundle",
            "IndexAuthenticated": "Bundle",

            // Graph
            "CSAForceLayout": "Bundle",
            "CSAGraph": "Bundle",
            "CSAGraphEdge": "Bundle",
            "CSAGraphNode": "Bundle",
            "CSAGraphEditor": "Bundle",
            "GraphEditor": "Bundle",

            // Articles
            "ArticleEditor": "Bundle",
            "ArticleManager": "Bundle",
            "ArticleRenderer": "Bundle",
            "ArticleTabArea": "Bundle",

            // Charts
            "BasicChart": "Bundle",
            "LinePlot": "Bundle",
            "PieChartSVG": "Bundle",
            "PointPlot": "Bundle",
            "d3": "Bundle",

            // Blog
            "BlogEntry": "Bundle",
            "BlogPanel": "Bundle",
            "BlogStore": "Bundle",

            // Eval
            "CustomRunStore": "Bundle",
            "EvalJobStore": "Bundle",
            "InteractiveTaskLog": "Bundle",
            "EvalTaskStore": "Bundle",

            "CustomRunWidget": "Bundle",
            "EvalJobResultsTable": "Bundle",
            "EvalTaskEditor": "Bundle",
            "EvalTaskManager": "Bundle",
            "EvalTaskStatistics": "Bundle",
            "ProgrammingLanguageTable": "Bundle",
            "SubmissionSummary": "Bundle",

            // Contest
            "ArchiveWidget": "Bundle",
            "ContestEditPanel": "Bundle",
            "ContestList": "Bundle",
            "ContestStore": "Bundle",
            "ContestWidget": "Bundle",
            "PrivateArchiveList": "Bundle",
            "PrivateArchiveWidget": "Bundle",
            "ContestAnalysis": "Bundle",

            // Workspace
            "CheckerManager": "Bundle",
            "DiffWidget": "Bundle",
            "WorkspaceManager": "Bundle",
            "WorkspaceSettingsPanel": "Bundle",

            // Multimedia
            "CallWidget": "Bundle",
            "MediaRecorder": "Bundle",
            "MediaStream": "Bundle",
            "MultimediaCallStore": "Bundle",
            "WebsocketMediaChannel": "Bundle",

            // Documentation
            "AdminDocumentationPanel": "Bundle",
            "DocumentationPanel": "Bundle",
            "DocumentationStore": "Bundle",

            // Interview
            "InterviewApp": "Bundle",
            "InterviewWidget": "Bundle",

            // Lessons
            "LessonList": "Bundle",
            "LessonPanel": "Bundle",

            // Maestro files
            "AdminPanel": "Bundle",
            "ChatStats": "Bundle",
            "Icarus": "Bundle",
            "UserStats": "Bundle",

            // Analytics
            "AnalyticsPanel": "Bundle",

            //Storage
            "StorageManager": "Bundle",

            "CSAAppStyle": "Bundle",
            "CSAGeometryObjects": "Bundle",
            "CSAGeometryWidget": "Bundle",

            "TranslationManager": "Bundle",

            "CSAAdjacencyLists": "Bundle",
            "CSAForceTransition": "Bundle",
            "CSAPlayer": "Bundle",
            "CSAVisualArray": "Bundle",
            "CSAVisualList": "Bundle",
            "CSAVisualQueue": "Bundle",
            "CSAVisualStack": "Bundle",
            "UserRatingChart": "Bundle",
            "DFSCoords": "Bundle"
        }
    },
    paths: {
        "Bundle": "js/bundle",

        "PublicState": "js/PublicState",
        "Emoji": "js/Emoji",
        "EmojiMini": "js/EmojiMini",

        //Latex
        "katex": "katex/katex.min",

        //Account management
        "CSAReputation": "js/CSAReputation",

        "oji": "js/oji",
        
        "CSAAdjacencyMatrix": "js/CSAAdjacencyMatrix",
        "CSADebuggerVariables": "js/CSADebuggerVariables",
        "CSAGraphMatrix": "js/CSAGraphMatrix",
        "CSALogo": "js/CSALogo",
        "CSAVisualArrayTestingPlayer": "js/CSAVisualArrayTestingPlayer",
        "CSAVisualDeque": "js/CSAVisualDeque",
        "CSAVisualListTestingPlayer": "js/CSAVisualListTestingPlayer",
        "Color": "js/ui/Color",
        "CustomInputable": "js/CustomInputable",
        "SVGSpecialObjects": "js/SVGSpecialObjects",

        // CSA Player
        "CSAPlayerPanelPlugin": "js/CSAPlayerPanelPlugin",
        "CSAPlayerPlugin": "js/CSAPlayerPlugin",

        // Problem apps and editorials
        "Anagrams": "js/Anagrams",
        "ArrayIntersection": "js/ArrayIntersection",
        "BottleRecycling": "js/BottleRecycling",
        "CSACircularShiftSortPlayer": "js/CSACircularShiftSortPlayer",
        "CSACircularShiftSortPlayerMatrix": "js/CSACircularShiftSortPlayerMatrix",
        "CircularShiftSort": "js/CircularShiftSort",
        "CycleTree": "js/CycleTree",
        "ExpectedProjection": "js/ExpectedProjection",
        "JustifyFormatting": "js/JustifyFormatting",
        "LightbulbGame": "js/LightbulbGame",
        "MatrixColoring": "js/MatrixColoring",
        "MinMaxSubarray": "js/MinMaxSubarray",
        "MovingSegments": "js/MovingSegments",
        "PartialLadderGraph": "js/PartialLadderGraph",
        "PartialLadderGraphEditorial": "js/PartialLadderGraphEditorial",
        "PreviousPermutation": "js/PreviousPermutation",
        "ServerHackingTaskWidget": "js/ServerHackingTaskWidget",
        "SnakeTaskWidget": "js/SnakeTaskWidget",
        "SquarishRectangle": "js/SquarishRectangle",
        "TreeGame": "js/TreeGame",
        "TreeSwapping": "js/TreeSwapping",
        "UIElements": "js/UIElements",


        // js for lessons
        "BinarySearchLesson": "js/BinarySearchLesson",
        "CSABfsCodePlayer": "js/CSABfsCodePlayer",
        "CSABfsPlayer": "js/CSABfsPlayer",
        "CSADfsPlayer": "js/CSADfsPlayer",
        "CSADfsCodePlayer": "js/CSADfsCodePlayer",
        "CSAGraphRepresentation": "js/CSAGraphRepresentation",
        "CSAMatchingBrackets": "js/CSAMatchingBrackets",
        "CSAMergeNodesAnimatedPlayer": "js/CSAMergeNodesAnimatedPlayer",
        "CSASlidingWindow": "js/CSASlidingWindow",
        "CSASlidingWindowPlayer": "js/CSASlidingWindowPlayer",
        "CSASoldiersRow": "js/CSASoldiersRow",
        "CSASoldiersRowCodePlayer": "js/CSASoldiersRowCodePlayer",
        "CSASoldiersRowPlayer": "js/CSASoldiersRowPlayer",
        "CSAStackCodePlayer": "js/CSAStackCodePlayer",
        "CSAStackPlayer": "js/CSAStackPlayer",
        "CSATopoSortBfsPlayer": "js/CSATopoSortBfsPlayer",
        "CSATopoSortBfsPlayer2": "js/CSATopoSortBfsPlayer2",
        "CSATopoSortDfsPlayer": "js/CSATopoSortDfsPlayer",
        "DisjointDataSetsLesson": "js/DisjointDataSetsLesson",
        "Heap": "js/Heap",
        "MazeProblemWidget": "js/MazeProblemWidget",
        "HeapsLesson": "js/HeapsLesson",
        "FenwickTree": "js/FenwickTree",
        "MergeKListsLesson": "js/MergeKListsLesson",
        "SegmentTreesLesson": "js/SegmentTreesLesson",
        "SortingLesson": "js/SortingLesson",

        // Main entry points
        "index": "js/index",

        // external libraries
        "DiffMatchPatch": "js/ext/diff_match_patch",
        "ICEAdapter": "js/ICEAdapter",
    },
};

require.config(window.requireConfig);
