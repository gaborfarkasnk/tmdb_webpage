from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class MovieListView(APIView):
    def get(self, request):
        movie_data = [
                {"id" : "1125899", "poster_path" : "https://media.themoviedb.org/t/p/w220_and_h330_face/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg", "title" : "Cleaner", "release_date" : "2025. febr. 19."},
                {"id" : "1165067", "poster_path" : "https://media.themoviedb.org/t/p/w220_and_h330_face/mClzWv7gBqgXfjZXp49Enyoex1v.jpg", "title" : "Cosmic Chaos", "release_date" : "2023. aug. 03."},
                {"id" : "1373723", "poster_path" : "https://media.themoviedb.org/t/p/w220_and_h330_face/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg", "title" : "The Codes of War", "release_date" : "2025. márc. 20."}
            ]
        
        return Response(movie_data)