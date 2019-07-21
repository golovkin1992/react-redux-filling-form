const groupFields = [
  {
    title: 'Параметры отправления',
    fields: [
      {
        title: 'Трек-номер*',
        name: 'trackNum',
      },
    ],
  },
  {
    title: 'Информация о получателе',
    fields: [
      {
        title: 'ФИО*',
        name: 'fio',
      },
      {
        title: 'Адрес*',
        name: 'address',
      },
    ],
  },
  {
    title: 'Паспортные данные получателя',
    className: 'group_pass',
    fields: [
      {
        title: 'Серия паспорта*',
        name: 'passSeries',
      },
      {
        title: 'Номер паспорта*',
        name: 'passNumber',
      },
      {
        title: 'Дата выдачи*',
        name: 'passIssueDate',
        isDate: true,
      },
      {
        title: 'Кем выдан*',
        name: 'passIssuingAuthority',

      },
      {
        title: 'Код подразделения*',
        name: 'passUnitCode',

      },
    ],
  },
];
export default groupFields;
