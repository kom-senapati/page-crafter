import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { type Project } from "@/constants/projects";

export const addProject = async (project: any) => {
  try {
    const projectRef = await addDoc(
      collection(db, "projects"),
      project
    );
    console.log("Project added with ID: ", projectRef.id);
  } catch (e) {
    console.error("Error adding project: ", e);
  }
};

export const getProjects = async (userId: string): Promise<Project[]> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "projects"), where("userId", "==", userId))
    );
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Project)
    );
  } catch (e) {
    console.error("Error fetching projects: ", e);
    return [];
  }
};

export const getProjectById = async (id: string) => {
  try {
    const projectRef = doc(db, "projects", id);
    const projectSnap = await getDoc(projectRef);

    if (projectSnap.exists()) {
      console.log("Project data:", projectSnap.data());
      return projectSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting project: ", e);
    throw e;
  }
};

export const updateProject = async (
  projectId: string,
  project
) => {
  try {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, project);
    console.log("Project updated with ID: ", projectId);
  } catch (e) {
    console.error("Error updating project: ", e);
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    await deleteDoc(doc(db, "projects", projectId));
    console.log("Project deleted with ID: ", projectId);
  } catch (e) {
    console.error("Error deleting project: ", e);
  }
};
