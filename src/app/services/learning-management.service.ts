import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LearningManagementService {
  
  /********************************* comments *********************************/
  private comments: any[] = [
    {
      comment:
        "Byways tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
    },
    {
      comment:
        "Byways tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
    },
    {
      comment:
        "Byways tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
    },
  ];

  /********************************* instructors *********************************/

  private instructors: any[] = [
    {
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
      ratings: 4.9,
      studentsCount: 2400,
    },
    {
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
      ratings: 4.9,
      studentsCount: 2400,
    },
    {
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
      ratings: 4.9,
      studentsCount: 2400,
    },
    {
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
      ratings: 4.9,
      studentsCount: 2400,
    },
    {
      imageUrl: '../../assets/programmer.jpg',
      fullName: 'Ronald Richards',
      profession: 'UI/UX Designer',
      ratings: 4.9,
      studentsCount: 2400,
    },
  ];

  /********************************* courses *********************************/

  private courses: any[] = [
    {
      imageUrl: '../../assets/programming-course.png',
      title: 'Beginner’s Guide to Design',
      author: 'Ronald Richards',
      ratings: 1200,
      totalHours: 22,
      totalLectures: 155,
      level: 'Beginner',
      price: 149.9,
      starCount: 5,
    },
    {
      imageUrl: '../../assets/programming-course.png',
      title: 'Beginner’s Guide to Design',
      author: 'Ronald Richards',
      ratings: 1200,
      totalHours: 22,
      totalLectures: 155,
      level: 'Beginner',
      price: 149.9,
      starCount: 5,
    },
    {
      imageUrl: '../../assets/programming-course.png',
      title: 'Beginner’s Guide to Design',
      author: 'Ronald Richards',
      ratings: 1200,
      totalHours: 22,
      totalLectures: 155,
      level: 'Beginner',
      price: 149.9,
      starCount: 5,
    },
    {
      imageUrl: '../../assets/programming-course.png',
      title: 'Beginner’s Guide to Design',
      author: 'Ronald Richards',
      ratings: 1200,
      totalHours: 22,
      totalLectures: 155,
      level: 'Beginner',
      price: 149.9,
      starCount: 5,
    },
  ];

  /********************************* categories *********************************/
  private categories: any[] = [
    {
      imageSrc: '../../assets/astrology.png',
      title: 'Astrology',
      courseCount: 11,
    },
    {
      imageSrc: '../../assets/code-browser.png',
      title: 'Development',
      courseCount: 12,
    },
    {
      imageSrc: '../../assets/briefcase.png',
      title: 'Marketing',
      courseCount: 12,
    },
    {
      imageSrc: '../../assets/physics.png',
      title: 'Physics',
      courseCount: 14,
    },
  ];

  constructor() {}

  getComments(): any[] {
    return this.comments;
  }

  getInstructors(): any[] {
    return this.instructors;
  }

  getCourses(): any[] {
    return this.courses;
  }

  getCategories(): any[] {
    return this.categories;
  }
}
