import * as mock from '@/mocks/content'

const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

async function read(value) {
  await delay()
  return structuredClone(value)
}

export const fetchHome = () => read(mock.home)
export const fetchTimeline = () => read(mock.timelineEvents)
export const fetchSignificance = () => read(mock.historicalSignificance)
export const fetchDepartments = () => read(mock.departments)
export const fetchOrgChart = () => read(mock.organizationChart)
export const fetchMembers = () => read(mock.boardMembers)
export const fetchBoardStructure = () => read(mock.boardStructure)
export const fetchMeetings = () => read(mock.meetingSchedule)
export const fetchAffairs = () => read(mock.affairs)
export const fetchAnnouncements = () => read(mock.announcements)
export const fetchContact = () => read(mock.contactInfo)

export async function fetchAnnouncement(id) {
  await delay()
  const found = mock.announcements.find((item) => item.id === id)
  if (!found) throw new Error('找不到這則公告')
  return structuredClone(found)
}
