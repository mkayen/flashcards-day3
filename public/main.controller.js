app.controller('MainController', function ($scope, whateverName) {
	$scope.flashCards = whateverName;

	FlashCardsFactory.getFlashCards().then(function(flashCards){
        console.log(flashCards)
    })

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});