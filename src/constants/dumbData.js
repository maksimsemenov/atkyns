const data = {
  forms: [
    'i-130'
  ],
  data: {
    relationship: 'child',
    relatedByAdoption: true,
    petitioner: {
      name: {
        first: 'John',
        middle: 'Albert',
        family: 'Sorbert',
        other: 'Sheimus Holin',
        native: 'Альберт Михайлов'
      },
      phone: '+1 917 204 3405',
      email: 'maks.semenov@gmail.com',
      addresses: {
        current: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          country: 'United States',
          zip: 11229,
          from: new Date(2015, 3, 1)
        },
        prior: [
          {
            street: '1123 Bensonhusrt avenue',
            apt: '1254',
            city: 'Brooklyn',
            state: 'NY',
            country: 'United States',
            zip: 11229,
            from: new Date(2014, 3, 1),
            to: new Date(2015, 3, 1)
          },
          {
            street: '1123 Bensonhusrt avenue',
            apt: '1254',
            city: 'Brooklyn',
            state: 'NY',
            country: 'United States',
            zip: 11229,
            from: new Date(2013, 3, 1),
            to: new Date(2014, 3, 1)
          }
        ],
        outside: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          country: 'United States',
          zip: 11229,
          from: new Date(2013, 3, 1),
          to: new Date(2014, 3, 1)
        }
      },
      birth: {
        date: new Date(1986, 10, 12),
        place: {
          city: 'Trehkorny',
          state: '',
          country: 'Chech Republic'
        }
      },
      citizenship: 'Russia',
      gender: 'female',
      status: {
        resident: {
          getByAdoption: true,
          getByMarriage: true,
          admission: {
            date: new Date(2010, 5, 19),
            place: 'New York, USA',
            aClass: 'DV1'
          }
        }
      },
      maritalStatus: 'married',
      marriages: {
        present: {
          date: new Date(2015, 11, 8),
          place: 'New York, NY, USA',
          spouse: {
            name: {
              first: 'Adrian',
              family: 'Sorbert',
              maiden: 'McKinzy',
              middle: ''
            },
            birth: {
              date: new Date(1991, 3, 23),
              place: {
                city: 'Hameenlinna',
                country: 'Finland'
              }
            }
          }
        },
        prior: [
          {
            spouse: {
              name: {
                first: 'Helga',
                family: 'Vanhankylantie'
              },
              bDate: new Date(1995, 3, 10)
            },
            date: new Date(1995, 3, 10),
            place: 'Finland',
            tDate: new Date(1998, 10, 30),
            tPlace: 'New York, USA'
          }
        ]
      },
      ssn: '192318888',
      family: [
        {
          name: {
            first: 'Alex',
            family: 'Seborbina'
          },
          relationship: 'father',
          bDate: new Date(1965, 6, 21),
          bPlace: 'Curshivkitze, Croatia',
          rPlace: 'Yekaterinburg, Russia'
        },
        {
          name: {
            first: 'Linda',
            family: 'Ferguson'
          },
          relationship: 'mother',
          bDate: new Date(1965, 6, 21),
          bPlace: 'Shankovnia, Poland',
          rPlace: 'Unfertilate, Finnland'
        }
      ],
      connection: 'In support of spouse\'s I-130'
    },
    relative: {
      name: {
        first: 'John',
        middle: 'Albert',
        family: 'Sorbert',
        other: 'Sheimus Holin',
        native: 'Альберт Михайлов'
      },
      addresses: {
        abroad: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          country: 'United States',
          zip: 11229,
          phone: '+7 923 234 3432'
        },
        current: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          country: 'United States',
          zip: 11229
        },
        us: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          zip: 11229
        },
        spouse: {
          street: '1123 Bensonhusrt avenue',
          apt: '1254',
          city: 'Brooklyn',
          state: 'NY',
          country: 'United States',
          zip: 11229,
          from: new Date(2015, 3, 1),
          to: 'current'
        },
        native: '60 лет Октября, д. 15, кв. 56, г. Трехгорный, Челябинская обл., Россия, 456080'
      },
      birth: {
        date: new Date(1986, 10, 12),
        place: {
          city: 'Trehkorny',
          state: '',
          country: 'Chech Republic'
        }
      },
      gender: 'female',
      citizenship: 'Russia',
      maritalStatus: 'married',
      marriages: {
        present: {
          date: new Date(2015, 11, 8),
          place: 'New York, NY, USA',
          spouse: {
            name: {
              first: 'Adrian',
              family: 'Sorbert',
              maiden: 'McKinzy',
              middle: ''
            },
            birth: {
              date: new Date(1991, 3, 23),
              place: {
                city: 'Hameenlinna',
                country: 'Finland'
              }
            }
          }
        },
        prior: [
          {
            spouse: {
              name: {
                first: 'Helga',
                family: 'Vanhankylantie'
              }
            },
            date: new Date(1995, 3, 10),
            place: 'Vanhankylantie, Finland',
            tDate: new Date(1998, 10, 30),
            tPlace: 'New York, NY, USA'
          }
        ]
      },
      usVisits: {
        current: {
          entry: {
            place: 'New York, US',
            date: new Date(2, 1, 2015),
            inspected: true,
            visa: {
              type: 'B-1',
              number: '313131331',
              consulate: 'Ekaterinburg',
              issueDate: new Date(11, 25, 2014),
              expireDate: new Date(11, 25,2020)
            }
          },
          status: {
            type: 'F-1'
          },
          i94: {
            number: '54412425030',
            date: new Date(2015, 3, 1),
            expireDate: new Date(2019, 3, 1),
            name: 'Albert Shumbert'
          }
        }
      },
      employment: {
        employer: {
          name: 'Corporation',
          address: 'New York, NY, USA'
        },
        date: new Date(2015, 4, 17)
      },
      /*immigrationProceeding: {
        date: new Date(2010, 1, 1),
        place: 'Chicago',
        status: 'judicalProceeding'
      },*/
      family: {
        father: {
          name: {
            first: 'Uiri',
            family: 'Semenov'
          }
        },
        mother: {
          name: {
            first: 'Olga',
            family: 'Semenova',
            maiden: 'Balitsjya'
          }
        },
        // children: [
        //   {
        //     name: {
        //       first: 'Alex',
        //       family: 'Seborbina'
        //     },
        //     birth: {
        //       date: new Date(1985, 6, 21),
        //       place: {
        //         country: 'Croatia'
        //       }
        //     }
        //   }
        // ]
      },
      application: {
        us: {
          city: 'Chicago',
          state: 'IL'
        },
        abroad: {
          city: 'Moscow',
          country: 'Russia'
        }
      }
    },
    petitions: {
      /*prior: [
        {
          name: {
            first: 'Anton',
            family: 'Chigur'
          },
          date: new Date(2014, 4, 24),
          place: 'Chicago, IL, USA',
          result: 'Petition accepted'
        }
      ],*/
      current: [
        {
          name: {
            first: 'Andry',
            family: 'Falcon'
          },
          relationship: 'child'
        },
        {
          name: {
            first: 'Andry',
            family: 'Falcon'
          },
          relationship: 'child'
        }
      ]
    }
  }
}

export const parent = {
  ...data,
  data: {
    ...data.data,
    relationship: 'parent',
    relatedByAdoption: false,
    petitioner: {
      ...data.data.petitioner,
      gender: 'female',
      maritalStatus: 'single',
      status: {
        citizen: {
          type: 'birth'
        }
      }
    }
  }
}
export const child = {
  ...data,
  data: {
    ...data.data,
    relationship: 'child',
    petitioner: {
      ...data.data.petitioner,
      gender: 'female',
      maritalStatus: 'widowed',
      status: {
        citizen: {
          type: 'parent',
          certificate: {
            number: 123231321,
            date: new Date(2013, 2, 27),
            place: 'Chicago, USA'
          }
        }
      },
      alienNumber: '123232'
    }
  }
}
export const brother = {
  ...data,
  data: {
    ...data.data,
    relationship: 'brother',
    petitioner: {
      ...data.data.petitioner,
      gender: 'female',
      maritalStatus: 'divorced',
      status: {
        citizen: {
          type: 'naturalization',
          certificate: {
            number: 123231321,
            date: new Date(2013, 2, 27),
            place: 'Chicago, USA'
          }
        }
      }
    }
  }
}

export default data
